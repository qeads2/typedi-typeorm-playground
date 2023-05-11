import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
@Entity()
export class WorkspaceMember {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    workspaceId: number;
    @Column()
    userId: number;
    @Column({ type: "enum", enum: MemberType})
    type: MemberType;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

}