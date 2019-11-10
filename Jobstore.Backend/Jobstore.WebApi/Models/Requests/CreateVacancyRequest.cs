namespace Jobstore.WebApi.Models.Requests
{
    public class CreateVacancyRequest
    {
        public string Title { get; set; }
        public string Descripion { get; set; }
        public string CompanyName { get; set; }
        public int SalaryValue { get; set; }
        public string SalaryCurrency { get; set; }
        public int TypeId { get; set; }
    }
}
