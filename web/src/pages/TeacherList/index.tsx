import React from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Estes sãp os proffys disponíveis"
      >
        <form id="search-teachers">
            <Input name="subject" label="Matéria" />
            <Select name="subject" label="Matéria" options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Física', label: 'Física' },
            ]} />
            <Select name="week_day" label="Matéria" options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]} />
            <Input name="time" label="Hora" />
          </form>  
      </PageHeader>
        
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>      
    </div>
  );
}

export default TeacherList;
