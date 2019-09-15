using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RedshiftSMWeb.Controllers
{
    public class ErrorHandelingController : Controller
    {
        public IActionResult OwnershipTransfer()
        {
            return View();
        }

        public IActionResult ActivationInterval()
        {
            return View();
        }

        public IActionResult commisionUpload()
        {
            return View();
        }

        public IActionResult BatchBarUnBar()
        {
            return View();
        }
        public IActionResult NotSimChange()
        {
            return View();
        }

        public IActionResult TransactionReport()
        {
            return View();
        }
    }
}