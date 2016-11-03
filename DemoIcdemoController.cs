using System.Web.Http;
using System.Data;
using System.Collections.Generic;
using System.IO;

namespace WebApplication1
{
    public class DemoIcdemoController : ApiController
    {
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public string GetData()
        {
            return File.ReadAllText(@"C:\Users\nhunt\Desktop\makes.txt").Replace("\t", "").Replace("\r\n", "");
        }

    }
}