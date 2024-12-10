import { Table, Model, Column, DataType, Default} from 'sequelize-typescript';

@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string

    @Column({
        type: DataType.FLOAT(6,2)
    })
    price: number

    @Default(true)
    @Column({
       type: DataType.BOOLEAN 
    })
    availability: bigint
}

export default Product;