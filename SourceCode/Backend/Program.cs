using System.Text.Json;
class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddControllersWithViews()
        .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            });
        var app = builder.Build();
        app.UseStaticFiles();
        app.UseRouting();
        app.MapControllers();
        app.UseFileServer();
        app.Run();
    }
}