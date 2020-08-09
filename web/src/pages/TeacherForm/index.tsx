import React , {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import './styles.css'

import WarningIcon from '../../assets/images/icons/warning.svg'

const TeacherForm= () => {
  const [name, setName ] = useState('')
  const [bio, setBio ] = useState('')
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState("");


  const [scheduleItems, setSchedulteItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  function addNewScheduleItem() {
    setSchedulteItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' },
    ])
  }

  function handleCreateClass(e:FormEvent) {
    e.preventDefault()

  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setSchedulteItems(newArray)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que legal! Você quer dar aulas."
        description="Preencha esse formulario"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Input name="subject" label="Matérias" />
            <Input name="cost" label="Custo/aula" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Física", label: "Física" },
                { value: "História", label: "História" },
                { value: "Inglês", label: "Inglês" },
                { value: "Inglês", label: "Inglês" },
              ]}
            />

            <Input name="cost" label="custo aula por hora" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sábado" },
                      { value: "7", label: "Domingo" },
                    ]}
                  />
                  <Input />
                </div>
              );
            })}
          </fieldset>
        </form>
        <footer>
          <p>
            <img src={WarningIcon} alt="Warning" />
            Importante <br />
            Preencha todos os campos.
          </p>
          <button type="button">Salvar</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
