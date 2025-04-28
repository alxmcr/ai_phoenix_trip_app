export function parseFormData(formData: FormData) {
  return {
    rating: Number(formData.get("rating")),
    start_date: new Date(formData.get("start_date") as string),
    end_date: new Date(formData.get("end_date") as string),
    destination: formData.get("destination"),
    company_name: formData.get("company_name"),
    origin: formData.get("origin"),
    trip_type: formData.get("trip_type"),
    description: formData.get("description"),
    transport_mode: formData.get("transport_mode"),
    email: formData.get("email"),
    age_group: formData.get("age_group"),
  };
}
