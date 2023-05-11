import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
@Entity()
export class Workspace {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    workspaceId: number;
    @Column()
    projectId: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

}