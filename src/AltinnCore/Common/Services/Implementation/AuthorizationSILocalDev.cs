﻿using System.Collections.Generic;
using System.IO;
using System.Text;
using AltinnCore.Common.Configuration;
using AltinnCore.Common.Services.Interfaces;
using AltinnCore.ServiceLibrary;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace AltinnCore.Common.Services.Implementation
{
    /// <summary>
    /// Authorization service created for service development where test data is located on disk
    /// </summary>
    public class AuthorizationSILocalDev : IAuthorization
    {
        private const string TESDATA_USER_DIRECTORY = @"/User/";

        private const string REPORTEELIST_FILENAME = "reporteelist.json";

        private TestdataRepositorySettings _testdataRepositorySettings;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthorizationSILocalDev"/> class.
        /// </summary>
        /// <param name="testdataRepositorySettings">Repository settings</param>
        public AuthorizationSILocalDev(IOptions<TestdataRepositorySettings> testdataRepositorySettings)
        {
            this._testdataRepositorySettings = testdataRepositorySettings.Value;
        }

        /// <summary>
        /// Creates the list of parties that a user can report for based on test data on disk
        /// </summary>
        /// <param name="userId">The userID</param>
        /// <returns>List of parties user can report for</returns>
        public List<Reportee> GetReporteeList(int userId)
        {
            string path = _testdataRepositorySettings.RepositoryLocation + TESDATA_USER_DIRECTORY + userId + @"/" + REPORTEELIST_FILENAME;
            string textData = File.ReadAllText(path, Encoding.UTF8);
            List<Reportee> reporteeList = JsonConvert.DeserializeObject<List<Reportee>>(textData);
            return reporteeList;
        }
    }
}
