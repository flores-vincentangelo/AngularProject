namespace Controllers;
using Microsoft.AspNetCore.Mvc;
using Database;
using Models;
using System.Text.Json;

public class ProfilesController: Controller
{
    [HttpGet]
    [Route("/{profileLink}")]
    public IActionResult GetUserByLink(string profileLink) {
        
        UserModel profileOwner = DbUsers.GetInformationById(profileLink);
        return Json(profileOwner);
    }
    
    [HttpPatch]
    [Route("/{profileLink}")]
    public IActionResult ModifyProfile(string profileLink,  [FromBody] UserModel user) {
        
        // Get Updated User Table
        var updatedUser = DbUsers.GetInformationById(profileLink);

        // Modify Users Table
        if (!String.IsNullOrEmpty(user.EmailAddress)) {
            bool result = false;
            result = BCrypt.Net.BCrypt.Verify(user.Password, updatedUser.Password);
            if(result)
            {
                DbUsers.ModifyInformation(profileLink, user);
                updatedUser = DbUsers.GetInformationById(profileLink);
                return Json(updatedUser);
            }
            else 
            {
                return(Unauthorized());
            }
        }
        else if (!String.IsNullOrEmpty(user.Password)) {
            bool result = false;
            result = BCrypt.Net.BCrypt.Verify(user.Password, updatedUser.Password);
            if(result)
            {
                user.Password = user.NewPassword;
                DbUsers.ModifyInformation(profileLink, user);
                updatedUser = DbUsers.GetInformationById(profileLink);
                return Json(updatedUser);
            }
            else 
            {
                return(Unauthorized());
            }
        }
        else if (!String.IsNullOrEmpty(user.ReadableBirthday)) {

            DateTime birthDate = DateTime.Parse(user.ReadableBirthday);
            var dateOfBirth = (long)((birthDate.Subtract(new System.DateTime(1970, 1, 1, 0, 0, 0, 0))).TotalSeconds);
            user.Birthday = dateOfBirth;
            DbUsers.ModifyInformation(profileLink, user);
            updatedUser = DbUsers.GetInformationById(profileLink);
            return Json(updatedUser);
        }
        else 
        { 
            DbUsers.ModifyInformation(profileLink, user);
            updatedUser = DbUsers.GetInformationById(profileLink);
            return Json(updatedUser);
        }
    }
}