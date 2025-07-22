import { UserEntity } from "./userTypes";

export interface WidgetEntity {
  id: string;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: string;
  user?: UserEntity;
}

export interface IAddWidgetPayload {
  title: string;
  text: string;
  createdBy: string;
}

export interface IAddWidgetResponse {
  id: string;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: string;
}
