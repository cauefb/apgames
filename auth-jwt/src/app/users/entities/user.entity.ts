import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { hashSync } from 'bcrypt';
  import { AutoMap } from "@automapper/classes";
  @Entity({ name: 'users' })

  export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @AutoMap()
    @Column({ name: 'first_name' })
    firstName: string;
    
    @AutoMap()
    @Column({ name: 'last_name' })
    lastName: string;
    @AutoMap()
    @Column()
    email: string;

    @AutoMap()
    @Column()
    password: string;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    
  
    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }
  }