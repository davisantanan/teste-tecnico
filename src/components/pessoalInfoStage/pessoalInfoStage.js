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
import { Controller } from "react-hook-form"
import EmailIcon from '../../assets/e-mail.png';
import AtentionIcon from '../../assets/atencao.png';


function PessoalInfoStage({ register, errors, control }){

    const maskCPF = (value) => {
        return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    }

    const maskPhone = (value) => {
        return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})(\d+?)$/, "$1");
    };
    
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
                    <Controller 
                    name="telefone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <InputFieldMedium
                      type="text"
                      {...field}
                      value={maskPhone(field.value)}
                      onChange={(e) => {
                        field.onChange(maskPhone(e.target.value))
                      }} />
                    )}>

                    </Controller>
                    <InputLabel>CELULAR (DDD)</InputLabel>
                  </InputContent>
                  <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
                </InputContainer>
                
                
                <InputContainer>
                  <InputContent>
                    <Controller
                    name="cpf"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <InputFieldMedium
                      type="text"
                      {...field}
                      value={maskCPF(field.value)}
                      onChange={(e) => {
                        field.onChange(maskCPF(e.target.value))
                      }} 
                      />
                    )}
                    />
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