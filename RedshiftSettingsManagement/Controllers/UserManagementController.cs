using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RedshiftSMWeb.Controllers
{
    public class UserManagementController : Controller
    {
        //ActionName is Users because User match with controller Name
        public IActionResult Users()
        {
            return View();
        }
        public IActionResult Role()
        {
            return View();
        }
        public IActionResult UserAdd()
        {
            return View();
        }
        public IActionResult RoleAdd()
        {
            return View();
        }
        public IActionResult UserUpdate()
        {
            return View();
        }

        public IActionResult RoleAssign()
        {
            return View();
        }

        public IActionResult RoleUpdate()
        {
            return View();
        }

        public IActionResult PassWordReset()
        {
            return View();
        }

    }
}