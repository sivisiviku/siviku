<template>
  <div class="grid grid-cols-3 gap-8 m-10">
    <div class="bg-slate-100 p-5 rounded-lg shadow-lg">
      <div class="mb-4">
        <label class="block mb-2" for="fullName">Full Name</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="fullName"
          type="text"
          v-model="form.fullname"
        />
      </div>
      <!-- upload image here -->
      <div class="mb-4">
        <label class="block mb-2" for="adress">Address</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="adress"
          type="text"
          v-model="form.contact.address"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2" for="email">Email</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="email"
          type="email"
          v-model="form.contact.email"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2" for="linkedin">LinkedIn</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="linkedin"
          type="text"
          v-model="form.contact.linkedin"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2" for="languages">Languages</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="languages"
          type="text"
          v-model="form.languages"
        />
        <span class="text-xs italic text-slate-600"
          >Separate with comma if more than one</span
        >
        <!-- button add for languages -->
      </div>
    </div>
    <div class="col-span-2 bg-zinc-100 p-5 rounded-lg shadow-lg">
      <div class="mb-4">
        <label class="block mb-2" for="summary">Summary</label>
        <textarea
          rows="4"
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="summary"
          type="text"
          v-model="form.summary"
        ></textarea>
      </div>
      <div class="mb-4">
        <div class="grid grid-cols-8 gap-4">
          <div class="col-span-4">
            <label class="block mb-2" for="skill">Skill</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="skill"
              type="text"
              v-model="skill.name"
            />
          </div>
          <div class="col-span-2">
            <label class="block mb-2" for="level">Level</label>
            <div class="flex">
              <input
                class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none w-1/2 mr-4"
                id="level"
                type="number"
                v-model="skill.level"
              />
              <button
                class="bg-sky-600 hover:bg-sky-400 rounded text-white w-20"
              >
                Add
              </button>
            </div>
            <span class="text-xs italic text-slate-600">From 0 to 10</span>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="text-2xl mb-2">Experience</h3>
        <div class="grid grid-cols-8 gap-4 mb-4">
          <div class="col-span-4">
            <label class="block mb-2" for="companyName">Company Name</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="companyName"
              type="text"
              v-model="experience.companyName"
            />
          </div>
          <div class="col-span-4">
            <label class="block mb-2" for="companyAdress">Company Adress</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="companyAdress"
              type="text"
              v-model="experience.companyAdress"
            />
          </div>
          <div class="col-span-4">
            <label class="block mb-2" for="title">Title</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="title"
              type="text"
              v-model="experience.title"
            />
          </div>
          <div class="col-span-2">
            <label class="block mb-2" for="dateStart">First Day</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="dateStart"
              type="date"
              v-model="experience.dateStart"
            />
          </div>
          <div class="col-span-2">
            <label class="block mb-2" for="dateEnd">Last Day</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="dateEnd"
              type="date"
              v-model="experience.dateEnd"
            />
            <span class="text-xs italic text-slate-600"
              >Leave last day empty if you still work in this company</span
            >
          </div>
          <div class="col-span-8">
            <label class="block mb-2" for="jobDescription"
              >Job Description</label
            >
            <div class="flex">
              <textarea
                rows="4"
                class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
                id="jobDescription"
                type="text"
                v-model="jobDescription"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            class="bg-sky-600 hover:bg-sky-400 rounded text-white py-2 px-4 mr-4"
          >
            Add Job Description
          </button>
          <button
            class="bg-green-600 hover:bg-green-400 rounded text-white py-2 px-4"
          >
            Add Experience
          </button>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="text-2xl mb-2">Education</h3>
        <div class="grid grid-cols-8 gap-4 mb-4">
          <div class="col-span-4">
            <label class="block mb-2" for="schoolName">School Name</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="schoolName"
              type="text"
              v-model="education.schoolName"
            />
          </div>
          <div class="col-span-4">
            <label class="block mb-2" for="schoolAdress">School Adress</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="schoolAdress"
              type="text"
              v-model="education.schoolAdress"
            />
          </div>
          <div class="col-span-4">
            <label class="block mb-2" for="major">Major</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="major"
              type="text"
              v-model="education.major"
            />
          </div>
          <div class="col-span-4">
            <label class="block mb-2" for="degree">Degree</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="degree"
              type="text"
              v-model="education.degree"
            />
          </div>
          <div class="col-span-2">
            <label class="block mb-2" for="dateGraduated">Date Graduated</label>
            <input
              class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="dateGraduated"
              type="date"
              v-model="education.dateGraduated"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <button
            class="bg-sky-600 hover:bg-sky-400 rounded text-white py-2 px-4"
          >
            Add Education
          </button>
        </div>
      </div>
      <div class="mb-4">
        <div class="grid grid-cols-8 gap-4">
          <div class="col-span-5">
            <label class="block mb-2" for="certification">Certification</label>
            <div class="flex">
              <input
                class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none mr-4"
                id="certification"
                type="text"
                v-model="certification"
              />
              <button
                class="bg-sky-600 hover:bg-sky-400 rounded text-white w-20"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mb-10">
    <button
      class="bg-transparent text-green-600 border border-green-600 hover:border-transparent hover:bg-green-600 mx-5 px-5 py-2 w-1/4 hover:text-white font-semibold rounded-full"
    >
      Save
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullname: "",
        contact: {
          address: "",
          email: "",
          linkedin: "",
        },
        languages: [],
        skill: [],
        experiences: [],
        educations: [],
        certifications: [],
      },
      skill: {
        name: "",
        level: 0,
      },
      experience: {
        companyName: "",
        companyAdress: "",
        title: "",
        dateStart: "",
        dateEnd: "",
        jobDescriptions: [],
      },
      jobDescription: "",
      education: {
        schoolName: "",
        schoolAdress: "",
        major: "",
        degree: "",
        dateGraduated: "",
      },
      certification: "",
    };
  },
};
</script>

<style></style>
