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
import InputMask from 'react-input-mask';


function AdressStage({ register, setValue, errors }){

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
            setValue('estado', data.uf);
        }).catch((err) => console.log(err)) 
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
                        <InputMask
                        mask="99999-999"
                        maskChar="_"
                        {...register('cep')}
                        type="text"
                        onBlur={checkCep}
                        >
                            {(inputProps) => (
                                <InputFieldCep {...inputProps} />
                            )}
                        </InputMask>
                        <InputLabelIcon>CEP DO ENDEREÇO</InputLabelIcon>
                    </InputContent>
                    <ErrorMessage>{errors.cep?.message}</ErrorMessage>
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

                    <InputContainer>
                        <InputContent>
                            <InputFieldShort
                            type="text" 
                            {...register("numero")}
                            />
                            <InputLabel>NÚMERO</InputLabel>
                        </InputContent>
                        <ErrorMessage>{errors.numero?.message}</ErrorMessage>
                    </InputContainer>                  
                </LineContainerInput>
                
                <LineContainerInput>
                    <InputContent>
                        <InputFieldMedium
                        type="text" 
                        {...register("complemento")}
                        />
                        <InputLabel>COMPLEMENTO</InputLabel>
                    </InputContent>
                
                    <InputContainer>
                        <InputContent>
                            <InputFieldMedium
                            type="text" 
                            {...register("bairro")} 
                            />
                            <InputLabel>BAIRRO</InputLabel>
                        </InputContent>
                        <ErrorMessage>{errors.bairro?.message}</ErrorMessage>
                    </InputContainer>
                
                    <InputContainer>
                        <InputContent>
                            <InputFieldMedium
                            type="text" 
                            {...register("cidade")}
                            />
                            <InputLabel>CIDADE</InputLabel>
                        </InputContent>
                        <ErrorMessage>{errors.cidade?.message}</ErrorMessage>
                    </InputContainer>
                    
                    <InputContainer>
                        <InputContent>
                            <InputFieldShort 
                            type="text" 
                            {...register("estado")}
                            />
                            <InputLabel>ESTADO</InputLabel>
                        </InputContent>
                        <ErrorMessage>{errors.estado?.message}</ErrorMessage>
                    </InputContainer>
                </LineContainerInput>
            </InputGroupContainer>
          </FormStage>
    )
}

export default AdressStage;