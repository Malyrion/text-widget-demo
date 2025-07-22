
export interface UserEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    email: string;
    name: string
}
