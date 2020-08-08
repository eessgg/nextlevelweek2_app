import React from 'react';
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import './styles.css'

import WarningIcon from '../../assets/images/icons/warning.svg'

const TeacherList = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que legal! Você quer dar aulas." 
        description="Preencha esse formulario" 
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matérias" />
          <Input name="cost" label="Custo/aula" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select name="subject" label="Matéria" options={[
            { value: 'Artes', label: 'Artes'},
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Ciências', label: 'Ciências' },
            { value: 'Física', label: 'Física' },
          ]} />

          <Input name="cost" label="custo aula por hora" />
        </fieldset>

        <footer>
          <p>
            <img src={WarningIcon} alt="Warning"/>
            Importante <br />
            Preencha todos os campos.
          </p>
          <button type="button">Salvar</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherList;
