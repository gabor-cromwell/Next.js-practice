import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = response.json();
  return data;
};

const Photos = () => {
  const { data, error } = useSWR("photos", fetcher);

  if (error) {
    return "There was an error";
  }

  if (!data) {
    return "Loading....";
  }

  return (
    <div>
      <h3>This is the photo page</h3>
      {data.map((photo) => {
        return (
          <p key={photo.id}>
            {photo.id} - {photo.title} - {photo.url}
          </p>
        );
      })}
    </div>
  );
};

export default Photos;
