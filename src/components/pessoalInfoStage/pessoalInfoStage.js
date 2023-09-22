import { 
    CpfMessage, 
    CpfMessageIcon, 
    CpfMessageIconContainer, 
    ErrorMessage, 
    FormStage, 
    InputContainer, 
    InputContent, 
    InputFieldEmail, 
    InputFieldMedium, 
    InputFieldName, 
    InputGroupContainer, 
    InputIcon, 
    InputIconContainer, 
    InputLabel, 
    InputLabelIcon, 
    InputMessageContainer, 
    LineContainerInput, 
    StageDescription, 
    StageNumber, 
    StageNumberContainer, 
    StageText, 
    StageTitle 
} from "../../styles";
import EmailIcon from '../../assets/e-mail.png';
import AtentionIcon from '../../assets/atencao.png';
import InputMask from 'react-input-mask';


function PessoalInfoStage({ register, errors }){

  return(
    <FormStage>
        <StageTitle>
          <StageNumberContainer>
            <StageNumber>1</StageNumber>
          </StageNumberContainer>
          <StageText>Dados Pessoais</StageText>
        </StageTitle>
        <StageDescription>Digite seus dados pessoais abaixo para iniciar a sua compra.</StageDescription>
        <InputGroupContainer>
          
          <InputContainer>
            <InputContent>
              <InputIconContainer>
                <InputIcon alt="email-icon" src={EmailIcon} />
              </InputIconContainer>
              <InputFieldEmail
              type="email"
              {...register("email")}
              />
              <InputLabelIcon>SEU E-MAIL</InputLabelIcon>
            </InputContent>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </InputContainer>
          

          <LineContainerInput>
            
            <InputContainer>
              <InputContent>
                <InputFieldName
                type="text"
                {...register("nome")}
                />
                <InputLabel>SEU NOME COMPLETO</InputLabel>
              </InputContent>
              <ErrorMessage>{errors.nome?.message}</ErrorMessage>
            </InputContainer>
            
            <InputContainer>
              <InputContent>
              <InputMask
                mask="(99) 99999-9999"
                maskChar="_"
                {...register('telefone')}
                type="text"
                >
                  {(inputProps) => (
                    <InputFieldMedium {...inputProps} />
                  )}
                </InputMask>
                <InputLabel>CELULAR (DDD)</InputLabel>
              </InputContent>
              <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
            </InputContainer>
            
            
            <InputContainer>
              <InputContent>
                <InputMask
                  mask="999.999.999-99"
                  maskChar="_"
                  {...register('cpf')}
                  type="text"
                  >
                    {(inputProps) => (
                      <InputFieldMedium {...inputProps} />
                    )}
                  </InputMask>
                <InputLabel>CPF</InputLabel>
              </InputContent>
              <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
              <InputMessageContainer>
                <CpfMessageIconContainer>
                  <CpfMessageIcon alt="Atention" src={AtentionIcon} />
                </CpfMessageIconContainer>
                <CpfMessage>CPF utilizado para nota fiscal.</CpfMessage>
              </InputMessageContainer>
              <CpfMessage>Não será compartilhado.</CpfMessage>
            </InputContainer>
          
          </LineContainerInput>
        </InputGroupContainer>
    </FormStage>
  )
}

export default PessoalInfoStage;