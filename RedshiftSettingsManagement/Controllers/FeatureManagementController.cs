using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RedshiftSMWeb.Controllers
{
    public class FeatureManagementController : Controller
    {
        public IActionResult UpdateFeature()
        {
            return View();
        }
        public IActionResult AssignFeature()
        {
            return View();
        }
    }
}