import { instance } from "./axios.api"
import { ITeacher } from "../store/admin/adminSlice.type"
import { ICreateTeacher } from "../store/admin/adminSlice.type"
import { IStudent } from "../store/admin/adminSlice.type"
import { ICreateStudent } from "../store/admin/adminSlice.type"
import { ICourse } from "../store/admin/adminSlice.type"
import { ICreateCourse } from "../store/admin/adminSlice.type"

export const AdminApi = {
    async getTeachers() {
      const response = await instance.get<Array<ITeacher>>(
        "teachers"
      );
      return response.data;
    },
    async postTeacher(data: ICreateTeacher) {
      const response = await instance.post<ICreateTeacher>("teachers", data);
      return response.data;
    },
    async getStudents() {
        const response = await instance.get<Array<IStudent>>(
            "students"
        );
        return response.data;
    },
        async postStudents(data: ICreateStudent) {
        const response = await instance.post<ICreateStudent>("students", data);
        return response.data;
    },
    async getCources() {
        const response = await instance.get<Array<ICourse>>(
            "cources"
        );
        return response.data;
    },
        async postCources(data: ICreateCourse) {
        const response = await instance.post<ICreateCourse>("cources", data);
        return response.data;
    },
    // async deleteProfile(profileId: number) {
    //   const response = await client.delete<IProfile>(
    //     device_profiles/${profileId},
    //   );
    //   return response.data;
    // },
    // async putProfile(data: IProfile) {
    //   const response = await client.put<IProfile>(device_profiles/${data.id}, {
    //     coverage: data.coverage,
    //     name: data.name,
    //     user: data.user,
    //     organization: data.organization,
    //   });
    //   return response.data;
    // },
    // async applyProfile(profileId: number) {
    //   const response = await client.post<IProfile>(
    //     device_profiles/apply/${profileId},
    //   );
  
    //   return response.data;
    // },
  };