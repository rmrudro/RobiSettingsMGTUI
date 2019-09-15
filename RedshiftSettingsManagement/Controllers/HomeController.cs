using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RedshiftSettingsManagement.Models;

namespace RedshiftSettingsManagement.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Get MAC Address From NIC's
        public string GetServerMac()
        {
            NetworkInterface[] nicCards = NetworkInterface.GetAllNetworkInterfaces();
            String strMACAddress = string.Empty;
            foreach (NetworkInterface nic in nicCards)
            {
                if (strMACAddress == String.Empty)
                {
                    IPInterfaceProperties properties = nic.GetIPProperties();
                    if ((nic.NetworkInterfaceType == NetworkInterfaceType.Ethernet || nic.NetworkInterfaceType == NetworkInterfaceType.Wireless80211) && !nic.Description.Contains("VMware") && nic.OperationalStatus == OperationalStatus.Up)
                    {
                        strMACAddress = nic.GetPhysicalAddress().ToString();
                        var regex = "(.{2})(.{2})(.{2})(.{2})(.{2})(.{2})";
                        var replace = "$1:$2:$3:$4:$5:$6";
                        strMACAddress = Regex.Replace(strMACAddress, regex, replace);
                    }

                }
            }
            return strMACAddress;
        }
    }
}
