﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace FitnessConnect.Areas.Identity.Data;

// Add profile data for application users by adding properties to the ApplicationUser class
public class ApplicationUser : IdentityUser<string>
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public DateTime birthdate { get; set; }
    public string? Gender { get; set; }
    public DateTime CreatedOn { get; set; }
    public int? CreatedById { get; set; }
    public DateTime ModifiedOn { get; set; }
    public int? ModifiedById { get; set; }
    public bool IsActive { get; set; }
    public string? ProfileImg { get; set; }
}

