import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FormControl, Input, InputLabel } from '@mui/material'
import { store } from '../../store/store'
import { observer } from 'mobx-react-lite'
import { FiltersType } from '../../interfaces/IMoviesState'

interface RangeSelectProps {
    minValue: number
    maxValue: number
    valueType: string
    filtersType: keyof FiltersType
}

const RangeSelect: FC<RangeSelectProps> = observer(
    ({ minValue, maxValue, filtersType, valueType }) => {
        const [values, setValues] = useState<string[]>([
            `${minValue}`,
            `${maxValue}`,
        ])

        useEffect(() => {
            if (values.every((value) => value.trim() !== '')) {
                if (parseInt(values[0]) > parseInt(values[1])) {
                    alert('Начальное значение не может быть больше конечного!')
                } else {
                    valueType === 'string' &&
                        store.addFilters(filtersType, [
                            String(values[0]),
                            String(values[1]),
                        ])
                    valueType === 'number' &&
                        store.addFilters(filtersType, [values[0], values[1]])
                }
            }
        }, [values])

        return (
            <div className={styles.rangeSelect}>
                <FormControl
                    variant="standard"
                    className={styles.rangeSelect__inputContainer}
                >
                    <InputLabel id="start">Начало</InputLabel>
                    <Input
                        id="start"
                        type="number"
                        inputProps={{ min: minValue, max: maxValue }}
                        value={values[0]}
                        onChange={(
                            e: React.ChangeEvent<
                                HTMLTextAreaElement | HTMLInputElement
                            >
                        ) => {
                            setValues([e.target.value, values[1]])
                        }}
                    />
                </FormControl>
                <FormControl
                    variant="standard"
                    className={styles.rangeSelect__inputContainer}
                >
                    <InputLabel id="start">Конец</InputLabel>
                    <Input
                        id="end"
                        type="number"
                        inputProps={{ min: minValue, max: maxValue }}
                        value={values[1]}
                        onChange={(
                            e: React.ChangeEvent<
                                HTMLTextAreaElement | HTMLInputElement
                            >
                        ) => {
                            e.target.value !== '' &&
                                setValues([values[0], e.target.value])
                        }}
                    />
                </FormControl>
            </div>
        )
    }
)

export default RangeSelect
