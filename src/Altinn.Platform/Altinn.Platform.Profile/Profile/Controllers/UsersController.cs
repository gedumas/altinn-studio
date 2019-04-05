using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Altinn.Platform.Profile.Controllers
{
    /// <summary>
    /// The users controller
    /// </summary>
    [Route("api/v1/[controller]")]
    public class UsersController : ControllerBase
    {
        /// <summary>
        /// Gets the user profile for a given user id
        /// </summary>
        /// <param name="userID">The party id</param>
        /// <returns>The information about a given user</returns>
        [HttpGet("{userIDList}")]
        public async Task<ActionResult> Get(int userID)
        {
            return new string[] { "value1", "value2" };
        }

    }
}
