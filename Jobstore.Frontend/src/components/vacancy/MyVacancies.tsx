import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Spinner from '../base/Spinner';
import Paginator from '../base/Paginator';
import Confirmation from '../base/Confirmation';
import { routes } from '../../constants';
import { VacancyModel, VacanciesQuery } from '../../types';
import VacanciesListItem from './vacanciesList/VacanciesListItem';

interface MyVacanciesProps {
    vacancies: Array<VacancyModel>,
    loading: boolean,
    totalCount: number,
    currentPage: number,
    getVacancies: (pageIndex?: number, query?: VacanciesQuery) => Promise<void>,
    deleteVacancy: (id: number) => Promise<void>
}

interface MyVacanciesState {
    showDeleteConfirmation: boolean,
    selectedVacancyId: number
}

class MyVacancies extends React.Component<MyVacanciesProps, MyVacanciesState> {
    state = {
        showDeleteConfirmation: false,
        selectedVacancyId: 0
    }
    componentDidMount() {
        this.props.getVacancies(1);
    }

    onDeleteVacancyClicked = (vacancy: VacancyModel) => {
        this.setState({ showDeleteConfirmation: true, selectedVacancyId: vacancy.id });
    }

    deleteVacancy = async () => {
        const { deleteVacancy, getVacancies, currentPage } = this.props;
        await deleteVacancy(this.state.selectedVacancyId);
        getVacancies(currentPage);
        this.setState({ showDeleteConfirmation: false, selectedVacancyId: 0 });
    }

    cancelDeleting = () => {
        this.setState({ showDeleteConfirmation: false, selectedVacancyId: 0 });
    }

    renderVacancyActions = (vacancy: VacancyModel) => {
        return (
            <>
                <Button
                    tag={Link}
                    to={`${routes.vacancyDetails}/${vacancy.id}`}
                    className="mx-1"
                    outline color="primary">Details</Button>
                <Button
                    tag={Link}
                    to={`${routes.editVacancy}/${vacancy.id}`}
                    className="mx-1"
                    outline color="warning">Edit</Button>
                <Button
                    onClick={() => this.onDeleteVacancyClicked(vacancy)}
                    className="mx-1"
                    outline color="danger">Delete</Button>
            </>
        );
    }

    renderVacanciesList = () => {
        return this.props.vacancies.map(vacancy =>
            <VacanciesListItem
                key={vacancy.id}
                vacancy={vacancy}
                renderActions={this.renderVacancyActions} />);
    }

    render() {
        const { showDeleteConfirmation } = this.state;
        const { totalCount, getVacancies, loading, currentPage } = this.props;
        return (
            <Row>
                <Col>
                    <Confirmation 
                      isOpen={showDeleteConfirmation}
                      confirmButtonLabel="Yes"
                      cancelButtonLabel="Cancel"
                      confirmationMessage="Are you sure you want to delete this item?"
                      onCancel={this.cancelDeleting}
                      onConfirm={this.deleteVacancy}/>
                    <Spinner loading={loading} />
                    {this.renderVacanciesList()}
                    {!loading && <Paginator
                        currentPage={currentPage}
                        itemsCount={totalCount}
                        onPageChange={(page: number) => getVacancies(page)}
                        className="justify-content-center mt-1 mb-1" />}
                </Col>
            </Row>
        )
    }
}

export default MyVacancies;