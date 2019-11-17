
using Jobstore.Infrastructure.Entities;
using System;

namespace Jobstore.WebApi.Models.Responses
{
    public class VacancyModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Descripion { get; set; }
        public string CompanyName { get; set; }
        public DateTime CreatedDate { get; set; }
        public VacancyType Type { get; set; }
        public double SalaryValue { get; set; }
        public string SalaryCurrency { get; set; }
        public string OwnerId { get; set; }
        public string OwnerName { get; set; }
    }
}
