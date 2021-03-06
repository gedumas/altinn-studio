import * as React from 'react';
import { createRef } from 'react';
import '../../styles/shared.css';

export interface IDatePickerProps {
  id: string;
  component: IFormComponent;
  formData: any;
  handleDataChange: (value: any) => void;
  isValid?: boolean;
}

export interface IDatePickerState {
  value: string;
}

export class DatepickerComponent
  extends React.Component<IDatePickerProps, IDatePickerState> {

  private myDateCmp = createRef<HTMLInputElement>();

  constructor(_props: IDatePickerProps, _state: IDatePickerState) {
    super(_props, _state);
    this.state = {
      value: _props.formData ? _props.formData : '',
    };
  }

  public onDateChange = () => {

    setTimeout(() => {
      if (!this.myDateCmp.current.value) {
        return;
      }
      this.setState({
        value: this.myDateCmp.current.value,
      });
      this.props.handleDataChange(this.state.value);
    }, 100);
  }

  public componentDidMount() {
    (window as any).initDatePicker();
  }

  public render() {
    return (
      <div className='form-group a-form-group a-form-group-datepicker'>
        <div className={'input-group' + (this.props.component.readOnly ? ' disabled' : '')}>
          <input
            type='text'
            id={this.props.id}
            className={(this.props.component.readOnly ? 'disabled-date ' : '') +
              (this.props.isValid ?
                'form-control a-hasButton date' :
                'form-control a-hasButton date validation-error')}
            onBlur={this.onDateChange}
            onChange={this.onDateChange}
            disabled={this.props.component.readOnly}
            required={this.props.component.required}
            value={this.state.value}
            ref={this.myDateCmp}
          />
          <div className={'input-group-prepend a-icon-right' + (this.props.component.readOnly ? ' disabled-date' : '')}>
            <i className='ai ai-date' />
          </div>
        </div>
      </div>
    );
  }
}
