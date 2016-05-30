using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(tooltipTesting.Startup))]
namespace tooltipTesting
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
