import { useQuery } from "@tanstack/react-query";
import { getUserById } from "~/services/users.service";
import styles from "./avatar-and-name.module.css";
import { Link } from "react-router";

interface AvatarAndNameProps {
  userId: number;
}

const AvatarAndName: React.FC<AvatarAndNameProps> = ({ userId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error!</div>;

  const avatarUrl = `https://ui-avatars.com/api/?background=random&rounded=true&name=${encodeURIComponent(
    data.name
  )}`;

  return (
    <div className={styles.container}>
      <img src={avatarUrl} alt={data.name} width={30} height={30} />
      <Link to={`/users/${userId}`} className={styles.name}>
        {data.name}
      </Link>
      <div></div>
    </div>
  );
};
export default AvatarAndName;
