import React from 'react'

import { VacancyModel } from '../../types';
import VacanciesListItem from './VacanciesListItem';

interface VacanciesListProps {
    vacancies: Array<VacancyModel>,
    getVacancies: (pageIndex: number, pageSize: number) => Promise<void>;
}

class VacanciesList extends React.Component<VacanciesListProps> {
    componentDidMount() {
        this.props.getVacancies(0, 10);
    }

    renderList() {
        return this.props.vacancies.map(vacancy =>
            <VacanciesListItem  vacancy={vacancy} />);
    }

    render() {
        return (
            <div className="mt-2 mb-2">
                {this.renderList()}
            </div>
        )
    }
}


export default VacanciesList;
