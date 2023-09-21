import { 
    ErrorMessage,
    FormStage, 
    InputContainer, 
    InputContent, 
    InputFieldAddress, 
    InputFieldCep, 
    InputFieldMedium, 
    InputFieldShort, 
    InputGroupContainer, 
    InputIcon, 
    InputIconContainer, 
    InputLabel, 
    InputLabelIcon, 
    LineContainerInput, 
    StageDescription, 
    StageNumber, 
    StageNumberContainer, 
    StageText, 
    StageTitle 
} from "../../styles";
import HomeIcon from '../../assets/botao-home.png';
import { useState } from "react";


function AdressStage({ register, setValue, errors }){

    const [ cep, setCep] = useState('');

    const checkCep = (e) => {
        if( !e || !e.target || !e.target.value) return;
        const cep = e.target.value;
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            setValue('endereco', data.logradouro);
            setValue('complemento', data.complemento);
            setValue('bairro', data.bairro);
            setValue('cidade', data.localidade);
            setValue('estado', data.uf)
            console.log(data)
        }).catch((err) => console.log(err))
        
    }

    const maskCEP = value => {
        return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
    }

    return(
        <FormStage>
            <StageTitle>
              <StageNumberContainer>
                <StageNumber>2</StageNumber>
              </StageNumberContainer>
              <StageText>Endereço de entrega</StageText>
            </StageTitle>
            <StageDescription>Digite o CEP para onde vamos enviar o seu pedido abaixo.</StageDescription>
            
            <InputGroupContainer>

                <InputContainer>
                    <InputContent>
                    <InputIconContainer>
                        <InputIcon alt="home-icon" src={HomeIcon} />
                    </InputIconContainer>
                    <InputFieldCep
                    maxLength={9}
                    name="CEP"
                    type="text"
                    value={maskCEP(cep)}
                    onChange={(e) => setCep(e.target.value)}
                    onBlur={checkCep} 
                    />
                    <InputLabelIcon>CEP DO ENDEREÇO</InputLabelIcon>
                    </InputContent>
                    
                </InputContainer>
                
                <LineContainerInput>
                
                    <InputContainer>
                        <InputContent>
                            <InputIconContainer>
                                <InputIcon alt="home-icon" src={HomeIcon} />
                            </InputIconContainer>
                            <InputFieldAddress
                            type="text"
                            {...register("endereco")}
                            />
                            <InputLabelIcon>ENDEREÇO</InputLabelIcon>
                        </InputContent>
                        <ErrorMessage>{errors.endereco?.message}</ErrorMessage>
                    </InputContainer>
                  
                  <InputContent>
                    <InputFieldShort
                    type="text" 
                    {...register("numero")}
                    />
                    <InputLabel>NÚMERO</InputLabel>
                </InputContent>
                </LineContainerInput>
                
                <LineContainerInput>
                <InputContent>
                  <InputFieldMedium
                  type="text" 
                  {...register("complemento")}
                  />
                  <InputLabel>COMPLEMENTO</InputLabel>
                </InputContent>
                

                <InputContent>
                  <InputFieldMedium
                  type="text" 
                  {...register("bairro")} 
                  />
                  <InputLabel>BAIRRO</InputLabel>
                </InputContent>
                
                <InputContent>
                  <InputFieldMedium
                  type="text" 
                  {...register("cidade")}
                  />
                  <InputLabel>CIDADE</InputLabel>
                </InputContent>
                
                <InputContent>
                    <InputFieldShort 
                    type="text" 
                    {...register("estado")}
                    />
                    <InputLabel>ESTADO</InputLabel>
                </InputContent>
                
                </LineContainerInput>
            </InputGroupContainer>
          </FormStage>
    )
}

export default AdressStage;