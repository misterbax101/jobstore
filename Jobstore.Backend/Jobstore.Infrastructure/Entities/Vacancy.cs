using System;

namespace Jobstore.Infrastructure.Entities
{
    public class Vacancy
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CompanyName { get; set; }
        public int SalaryValue { get; set; }
        public string SalaryCurrency { get; set; }
        public DateTime CreatedDate { get; set; }
        public int TypeId { get; set; }
        public VacancyType Type { get; set; }
        public string OwnerId { get; set; }
        public User Owner { get; set; }
    }
}
