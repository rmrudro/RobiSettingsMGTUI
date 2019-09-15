using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RedshiftSMWeb.Controllers
{
    public class ReportsController : Controller
    {
        public IActionResult GetTransaction()
        {
            return View();
        }


    }
}