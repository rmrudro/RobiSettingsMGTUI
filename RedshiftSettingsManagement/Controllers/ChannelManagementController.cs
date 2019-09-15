using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RedshiftSMWeb.Controllers
{
    public class ChannelManagementController : Controller
    {
        public IActionResult Chennel()
        {
            return View();
        }
        public IActionResult Settings()
        {
            return View();
        }
        public IActionResult channel2()
        {
            return View();
        }
    }
}