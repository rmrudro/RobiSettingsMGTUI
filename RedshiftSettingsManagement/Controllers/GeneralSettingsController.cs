using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RedshiftSMWeb.Controllers
{
    public class GeneralSettingsController : Controller
    {
        public IActionResult Process()
        {
            return View();
        }

        public IActionResult AppSettings()
        {
            return View();
        }
        public IActionResult Third_Party_Application()
        {
            return View();
        }
        public IActionResult AdSettings()
        {
            return View();
        }
        public IActionResult Configaration_Controls()
        {
            return View();
        }
        public IActionResult Configaration_Controls1()
        {
            return View();
        }
        public IActionResult FTR()
        {
            return View();
        }
    }
}