using System.Xml.Serialization;

namespace AltinnCore.ServiceLibrary.Workflow
{
    /// <summary>
    /// Class representing the task of a process
    /// </summary>
    public class Task
    {
        /// <summary>
        /// Gets or sets the ID of a task
        /// </summary>
        [XmlAttribute("id")]
        public string Id { get; set; }

        /// <summary>
        /// Gets or sets the name of a task
        /// </summary>
        [XmlAttribute("name")]
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the incoming id of a task
        /// </summary>
        [XmlElement("incoming")]
        public string Incoming { get; set; }

        /// <summary>
        /// Gets or sets the outgoing id of a task
        /// </summary>
        [XmlElement("outgoing")]
        public string Outgoing { get; set; }
    }
}
