import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useForm, Controller } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import './form.scss'
import Input from "./Input"
import Select, { components } from 'react-select'
import TextArea from "./TextArea"
import Checkbox from "./Checkbox"
import Success from "../success/Success"

export function Form(props){
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    const [showSuccess, setShowSuccess] = useState(false)
    const { register, handleSubmit, control, watch, errors } = useForm()

    
    const watchTerms = watch("termsAccepted", false);

    //transition

    //console.log(watch("industry")); 
    // select element style
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: "#000",
        }),
        container: (provided) => ({
            ...provided,
            width: "100%",
        }),
        control: (provided) => ({
            "background-color": "#fff",
            height: "2.25rem",
            width: "100%",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
        }),

        valueContainer: (provided) => ({
            width: "100%",
            flex: 1,
            "padding-left": "5px",
            "padding-right": "5px",
        }),
        indicatorsContainer: (provided) => ({

        }),
        input: (provided) => ({
            color: "#000",
        })
    }

    // select dropdown caret
    const Placeholder = props => {
        return <components.Placeholder {...props} />;
    }

    const DownIcon = () => {
        return <span className="caret-down"></span>;
    }

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <DownIcon />
            </components.DropdownIndicator>
        );
    };

    // select data
    const industry = props.Industry.map(industry => ({ value: industry.toLowerCase(), label: industry }))
    const operatingGeography = props.OperatingGeography.map(geo => ({value: geo.toLowerCase(), label: geo}))
    const flags = props.flags.map(flag => ({value: flag.name.toLowerCase(), label: flag.emoji + ' ' + flag.name}))

    // on form submit do.. api call etc
    const onSubmit = async (data, e) => {
        setShowSuccess(true)
        await sleep(2000)
        e.target.reset() 
        //alert(JSON.stringify(data))
        setShowSuccess(false)
    }

    return (
        <form className="modular" onSubmit={handleSubmit(onSubmit)}>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <Input label="First name*" name="name" type="text" innerRef={register({ required: true })}/>
                        <ErrorMessage errors={errors} name="name" 
                            message="Please enter your name"
                            render={({ message }) => <span className="error">{message}</span>}
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <Input label="Last name" name="lastname"  type="text" innerRef={register}/>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <Input label="Email*" name="email" type="email" innerRef={register({ required: true})}/>
                        <ErrorMessage errors={errors} name="email" 
                            message="Please enter your email address"
                            render={({ message }) => <span className="error">{message}</span>}
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <Input label="Job title" name="job"  type="text" innerRef={register}/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <Input label="Company*" name="company" innerRef={register({ required: true })}/>
                        <ErrorMessage errors={errors} name="company" 
                            message="Please enter your company name"
                            render={({ message }) => <span className="error">{message}</span>}
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label class="label">Industry*</label>
                        <Controller name="industry" control={control} defaultValue={"N/A"} rules={{ required: true }} options={industry} 
                        styles={customStyles}  components={{ Placeholder, DropdownIndicator }} placeholder={"N/A"} as={Select}/>
                        <ErrorMessage errors={errors} name="industry" 
                            message="Please enter industry"
                            render={({ message }) => <span className="error">{message}</span>}
                        />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label class="label">Country*</label>
                        <Controller name="country" control={control} defaultValue={"N/A"} rules={{ required: true }} options={flags} 
                        styles={customStyles}  components={{ Placeholder, DropdownIndicator }} placeholder={"N/A"} as={Select}/>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label class="label">Operating geography</label>
                        <Controller name="operatingGeography" control={control} defaultValue={"N/A"} rules={{ required: true }} options={operatingGeography} 
                        styles={customStyles}  components={{ Placeholder, DropdownIndicator }} placeholder={"N/A"} as={Select}/>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <TextArea label="What would you like to talk about?*" name="inquiry" innerRef={register({ required: true })}/>
                    <ErrorMessage errors={errors} name="inquiry" 
                            message="Don' send us empty emails =)"
                            render={({ message }) => <span className="error">{message}</span>}
                    />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <Checkbox label={<>By submitting this form I accept <a href="/privacy-policy" target="_blank">privacy policy and cookie policy</a>.</>} name="termsAccepted" innerRef={register({ required: true })}/>
                    <Checkbox label="I would like to receive your newsletter." name="newsletter" innerRef={register}/>
                </div>
                <div className="column">
                    <div>
                        <button type="submit" disabled={!watchTerms}>Send</button>
                    </div>
                </div>
            </div>
    

        <CSSTransition in={showSuccess} timeout={2000} classNames="message" unmountOnExit >
            <Success message="Thank you for contacting us!"/>

        </CSSTransition>
            
        </form>


    )
}

export default Form