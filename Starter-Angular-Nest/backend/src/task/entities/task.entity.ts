import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn('uuid')
    uuid:string

    @Column({nullable:false})
    description:string

}
