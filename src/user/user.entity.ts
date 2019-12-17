import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  firstName: string;

  @Column()
  age: number;

  @Column({default: false, insert: false})
  isActive: boolean;
}
