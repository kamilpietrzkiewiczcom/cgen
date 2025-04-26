"use client"
import React, {useCallback, useState} from "react";
import {Property} from "csstype";

type Assertion = {
  visibility: string,
  name: string
}

type Property = {
  isGetter: boolean,
  isSetter: boolean,
  getterVisibility: string,
  setterVisibility: string,
  addSetterToConstruct: boolean;
  visibility: string,
  type: string,
  name: string,
  assertions: Assertion[]
}

export default function Home() {
  const [className, setClassName] = useState<string>("");

  const [assertions, setAssertions] = useState<Assertion[]>([]);

  const [isClassFinal, setIsClassFinal] = useState<boolean>(false);
  const [isClassReadonly, setIsClassReadonly] = useState<boolean>(false);

  const [propertyVisibility, setPropertyVisibility] = useState<string>("private");
  const [propertyType, setPropertyType] = useState<string>("int");
  const [propertyName, setPropertyName] = useState<string>("");

  const [isPropertyAssertionSet, setIsPropertyAssertionSet] = useState<boolean>(false);
  const [propertyAssertionName, setPropertyAssertionName] = useState<string>("");
  const [isPropertyGetterSet, setIsPropertyGetterSet] = useState<boolean>(true);
  const [isPropertySetterSet, setIsPropertySetterSet] = useState<boolean>(true);
  const [propertyGetterVisibility, setPropertyGetterVisibility] = useState<string>("public");
  const [propertySetterVisibility, setPropertySetterVisibility] = useState<string>("private");
  const [propertyAssertionVisibility, setPropertyAssertionVisibility] = useState<string>("private");

  const [isAddPropertyToConstructor, setIsAddPropertyToConstructor] = useState<boolean>(true);

  const [properties, setProperties] = useState<Property[]>([]);

   const updateClassNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(event.target.value);
  }

  const onSetClassFinalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsClassFinal(event.target.checked);
  }

  const onSetClassReadonlyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsClassReadonly(event.target.checked);
  }

  const onChangePropertyTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setPropertyType(type);
  }

  const onChangePropertyNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyName(event.target.value);
  }

  const addPropertyToClassHandler = () => {
    setProperties((prevState: Property[]) => {
      if (propertyName === "") {
        return [...prevState];
      }

      let isVariablePresent = false;

      for (let index in prevState) {
        if (prevState[index].name === propertyName) {
          isVariablePresent = true;
          break;
        }
      }

      if (isVariablePresent) {
        alert("Variable exists");
        return [...prevState];
      }

      const property: Property = {
        isGetter: isPropertyGetterSet,
        isSetter: isPropertySetterSet,
        getterVisibility: propertyGetterVisibility,
        setterVisibility: propertySetterVisibility,
        addSetterToConstruct: isAddPropertyToConstructor,
        visibility: propertyVisibility,
        type: propertyType,
        name: propertyName,
        assertions: assertions,
      };

      return [...prevState, property];
    });
  }

  const onAddPropertySetterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPropertySetterSet(event.target.checked);
  }

  const onAddPropertyGetterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPropertyGetterSet(event.target.checked);
  }

  const onChangeSetterVisibilityHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPropertySetterVisibility(event.target.value);
  }

  const onChangeGetterVisibilityHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPropertyGetterVisibility(event.target.value);
  }

  const onAddPropertyToConstructorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAddPropertyToConstructor(event.target.checked);
  }

  const onAddPropertyAssertionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPropertyAssertionSet(event.target.checked);
  }

  const onChangeAssertionVisibilityHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPropertyAssertionVisibility(event.target.value);
  }

  const onSetPropertyAssertionNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyAssertionName(event.target.value);
  }

  const getClassName = useCallback((className: string) => {
    if (className === "") {return ""}
    return className[0].toUpperCase() + className.substring(1, className.length);
  }, [className]);

  const getGetterName = (propertyName: string) => {
    if (propertyName === "") {return ""}
    return propertyName[0].toUpperCase() + propertyName.substring(1, propertyName.length);
  };

  return <>
    <div>
      <label>
        Is class final
        <input type={"checkbox"} name={"is-class-final"} onChange={onSetClassFinalHandler} />
      </label>
      <label>
        Is class read only
        <input type={"checkbox"} name={"is-class-read-only"} onChange={onSetClassReadonlyHandler} />
      </label>
      <label>
        Class name
        <input type={"text"} name={"classname"} value={className} onChange={updateClassNameHandler} />
      </label>
    </div>
    <div>
      <div>
        Add class property
        <select>
          <option value={"private"}>private</option>
          <option value={"public"}>public</option>
          <option value={"protected"}>protected</option>
        </select>
        <select onChange={onChangePropertyTypeHandler}>
          <option value={"int"}>int</option>
          <option value={"float"}>float</option>
          <option value={"string"}>string</option>
          <option value={"uuid"}>uuid</option>
          <option value={"custom-class"}>custom class</option>
        </select>
        <input type={"text"} name={"property-name"} value={propertyName} onChange={onChangePropertyNameHandler} />
      </div>
      <div>
        <label>
          Add property setter
          <input type={"checkbox"} name={"is-add-property-setter"} checked={isPropertySetterSet} onChange={onAddPropertySetterHandler} />
        </label>
        <label>
          Setter visibility
          <select onChange={onChangeSetterVisibilityHandler} defaultValue={propertySetterVisibility}>
            <option value={"private"}>private</option>
            <option value={"public"}>public</option>
            <option value={"protected"}>protected</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Add property getter
          <input type={"checkbox"} name={"is-add-property-getter"} checked={isPropertyGetterSet}  onChange={onAddPropertyGetterHandler} />
        </label>
        <label>
          Property getter visibility
          <select onChange={onChangeGetterVisibilityHandler} defaultValue={propertyGetterVisibility}>
            <option value={"private"}>private</option>
            <option value={"public"}>public</option>
            <option value={"protected"}>protected</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Add property assertion
          <input type={"checkbox"} name={"is-add-property-assertion"} checked={isPropertySetterSet} onChange={onAddPropertyAssertionHandler} />
        </label>
        <label>
          Assertion name
          <input type={"text"} name={"property-assertion-name"} value={propertyAssertionName} onChange={onSetPropertyAssertionNameHandler} />
        </label>
        <label>
          Assertion visibility
          <select onChange={onChangeAssertionVisibilityHandler} defaultValue={propertyAssertionVisibility}>
            <option value={"private"}>private</option>
            <option value={"public"}>public</option>
            <option value={"protected"}>protected</option>
          </select>
        </label>
      </div>
      <div>
        {assertions.map((assertion) => {
          return <div>
            Assertion: {assertion.visibility} {assertion.name}
          </div>
        })}
      </div>
      <div>
        Add property to constructor
        <input type={"checkbox"} name={"is-add-property-to-constructor"} onChange={onAddPropertyToConstructorHandler} />
      </div>
      <div>
        <button onClick={addPropertyToClassHandler}>add property</button>
      </div>
    </div>
    <div>
      <p>class code</p>
      <code>
        {isClassFinal ? "final" : ""} {isClassReadonly ? "readonly" : ""} class {getClassName(className)}
        <br />
        {"{"}

        <br />
          {properties.map((property) => {
            return <div><span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>{property.visibility} {property.type} ${property.name};</div>
          })}


        {properties.map((property: Property) => {
          if (!property.isSetter) {
            return <></>;
          }

          return <><br /><div>
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
            {property.setterVisibility} function {property.name}Equals({property.type} ${property.name}): void
            <br />
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>{"{"}
            <br />
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span><span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
            $this->{property.name} = ${property.name};
            <br />
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>{"}"}
          </div></>
        })}


        {properties.map((property: Property) => {
          if (!property.isSetter) {
            return <></>;
          }

          return <><br /><div>
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
            {property.getterVisibility} function get{getGetterName(property.name)}(): {property.type}
            <br />
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>{"{"}
            <br />
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span><span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
            return $this->{property.name};
            <br />
            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>{"}"}
          </div></>
        })}

        {"}"}
      </code>
    </div>
  </>;
}
