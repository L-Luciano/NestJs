import { Entity, PrimaryGeneratedColumn, Generated, Column } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    @Generated('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;
}
