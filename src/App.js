import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent'
import StatesInClassComponent from './components/StatesInClassComponent'
import React, { Component } from 'react';
import CounterComponent from './components/CounterComponent';
import ClickEventInAFunctionalComp from './components/ClickEventInAFunctionalComp';
import ClickEventInAClassComp from './components/ClickEventInAClassComp';
import ParentComponent from './PassingMethodAsAParameterToChildComponent/ParentComponent';
import GreetingComponent from "./ConditionalRendering/GreetingComponent";
import List from "./ListRendering/ListContainer"; 
import Inline from "./CssStyling/InlineCss";
import ExternalCss from "./CssStyling/ExtenalCss";
import StyledModule from "./CssStyling/StylesModules";
import Form from "./Forms/Form";
import LifecycleMethods from "./lifecycleMethods/LifecycleMetods";
import ParentComponent1 from "./PureComponents/ParentComponent";
import Purecomponent from './PureComponents/Purecomponent';
import ParentComponent2 from "./MemoFunctionalComponent/ParentComponent";

//stateless functional component
function App() {
  return (
    <div className="App">
        
    {/* We can send the properties in the components like this react will bundle all into
    objects, we can send as many properties we want
        
    <FunctionalComponent name = "Ankur" type = "Hello">
      <button>Action</button>
    </FunctionalComponent>
    <ClassComponent name = "Ankur" type = "Hello">
      <button>Action</button>
    </ClassComponent>*/}

    {/*<StatesInClassComponent/>*
    {<CounterComponent/>}
    <ClickEventInAFunctionalComp/>
    <ClickEventInAClassComp/>8
    <ParentComponent/>
    <GreetingComponent/>
    <List/>
    <Inline/>
    <ExternalCss/>
    <StyledModule/>
    <Form/>
    <LifecycleMethods/>
    <ParentComponent1/>*/}
    <ParentComponent2/>
    </div>
  );
}

export default App;
