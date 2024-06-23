import React, { FC, useEffect } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { store } from '../../store/store'
import { FiltersType } from '../../interfaces/IMoviesState'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

interface ChipSelectProps {
    label: string
    list: string[]
    filterType: keyof FiltersType
}

const ChipSelect: FC<ChipSelectProps> = ({ label, list, filterType }) => {
    const theme = useTheme()
    const [itemName, setItemName] = React.useState<string[]>([])

    useEffect(() => {
        itemName.length > 0 && store.addFilters(filterType, itemName)
        itemName.length === 0 && store.addFilters(filterType, null)
    }, [itemName, filterType])

    const handleChange = (event: SelectChangeEvent<typeof itemName>) => {
        const {
            target: { value },
        } = event
        const newItemName = typeof value === 'string' ? value.split(',') : value
        setItemName(newItemName)
    }
    return (
        <div>
            <FormControl sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={itemName}
                    onChange={handleChange}
                    input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {list.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            style={getStyles(item, itemName, theme)}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default ChipSelect
