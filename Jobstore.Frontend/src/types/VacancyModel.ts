export  interface VacancyModel {
    id: number
    title: string,
    description: string,
    companyName: string,
    salaryValue: number,
    salaryCurrency: string,
    ownerName: string,
    createdDate: Date,
    typeId: number
}