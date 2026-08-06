import { provinces, wards } from 'vietnam-address-data'

export const ADDRESS_DATA = provinces
    .map((province) => ({
        province: province.name || '',
        wards: wards
            .filter(w => w.provinceId === province.id)
            .map((ward) => ward.name || '')
            .sort((a, b) => a.localeCompare(b, 'vi'))
    }))
    .sort((a, b) => a.province.localeCompare(b.province, 'vi'))
