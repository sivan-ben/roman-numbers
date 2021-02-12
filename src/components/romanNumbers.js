import React, { useState } from 'react';
import { Grid, Segment, Header, Button, Form } from 'semantic-ui-react';
import translateNumbers from '../utils/translateNumber'
import useCustomForm from '../utils/customHookForm';

export default function RomanNumbers() {
    const [num, setNumber] = useCustomForm()
    const [romNum, setRomNum] = useState()
    

    const translate = () => {
        if (num <= 0 || num > 100) return alert('you need to choose difrent number !')
        console.log(num)
        const res = translateNumbers(num)
        setRomNum(res)
    }

    return (
        <div>
            <Grid textAlign='center' verticalAlign='middle' className='formCss'>
                <Grid.Column style={{ maxWidth: 300 }}>
                    <Header as='h1' icon color='orange' textAlign='center'>
                        Choose a number
        </Header>
                    <Form size='large' noValidate>
                        <Segment stacked>
                            <Form.Input name='num' icon='numbered list' iconPosition='left' type='number' onChange={setNumber} />
                            <Button color='teal' fluid size='large' onClick={translate} >Translate</Button>
                        </Segment>
                    </Form>
                    <Header as='h1' icon color='teal' textAlign='center'>
                        Roman Number: {romNum}
                    </Header>
                </Grid.Column>
            </Grid>
        </div>
    )
}