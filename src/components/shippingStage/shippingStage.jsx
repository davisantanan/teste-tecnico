import { 
    CheckBoxContainer, 
    DescriptionCheckBox, 
    ErrorMessage, 
    FooterContainer, 
    IconButton, 
    InformationCheckBoxContainer, 
    InputCheckBox, 
    LabelCheckBox, 
    ShippingContainer, 
    ShippingContainerTitle, 
    SubmitButton, 
    TextCheckBoxContainer, 
    TextFooter, 
    TextFooterContainer, 
    TextFooterIcon, 
    ValueCheckBox,
    ValueContainer 
} from "../../styles";
import PadlockIcon from '../../assets/fechadura.png';
import ButtonIcon from '../../assets/continue.png';
import { useState } from "react";
import { Controller } from "react-hook-form";


function ShippingStage({ control, errors }){
  
    const [ selectedOption, setSelectedOption ] = useState();

    return(
        <ShippingContainer>
            <ShippingContainerTitle>Opções de entrega:</ShippingContainerTitle>
            
            <CheckBoxContainer selectedOption={selectedOption === "R$ 13,70"}>
                <Controller
                name="envio"
                control={ control }
                defaultValue={null}
                render={({ field }) => ( 
                    <InputCheckBox
                    type="radio"
                    value={"R$ 13,70"}
                    checked={field.value === "R$ 13,70"}
                    onChange={() => {
                        field.onChange("R$ 13,70")
                        setSelectedOption("R$ 13,70")
                    }} 
                    />
                )}
                />
                <InformationCheckBoxContainer>
                    <TextCheckBoxContainer>
                    <LabelCheckBox>Econômico</LabelCheckBox>
                    <DescriptionCheckBox>8 dias úteis a partir da postagem</DescriptionCheckBox>
                    </TextCheckBoxContainer>
                    <ValueContainer>
                    <ValueCheckBox>R$ 13,70</ValueCheckBox>
                    </ValueContainer>
                </InformationCheckBoxContainer>
            </CheckBoxContainer>

            <CheckBoxContainer selectedOption={selectedOption === "R$ 50,19"}>
                <Controller
                    name="envio"
                    control={ control }
                    defaultValue={null}
                    render={({ field }) => ( 
                        <InputCheckBox
                        type="radio"
                        value={"R$ 50,19"}
                        checked={field.value === "R$ 50,19"}
                        onChange={() => {
                            field.onChange("R$ 50,19")
                            setSelectedOption("R$ 50,19")
                        } } 
                        />
                    )}
                    />
                <InformationCheckBoxContainer>
                    <TextCheckBoxContainer>
                    <LabelCheckBox>Expresso</LabelCheckBox>
                    <DescriptionCheckBox>7 dias úteis a partir da postagem</DescriptionCheckBox>
                    </TextCheckBoxContainer>
                    <ValueContainer>
                    <ValueCheckBox>R$ 50,19</ValueCheckBox>
                    </ValueContainer>
                </InformationCheckBoxContainer>
            </CheckBoxContainer>
            <ErrorMessage>{errors.envio?.message}</ErrorMessage>

            <FooterContainer>
                <TextFooterContainer>
                    <TextFooterIcon alt='padlock' src={PadlockIcon} />
                    <TextFooter>Você está em uma página segura.</TextFooter>
                </TextFooterContainer>
                <SubmitButton type="submit">
                    <IconButton alt="continue" src={ButtonIcon} />
                    Continuar
                </SubmitButton>
            </FooterContainer>

        </ShippingContainer>
    )
}

export default ShippingStage;