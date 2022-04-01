import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {addUser} from "../store/users/UsersSlice";
import {getRandomIntInclusive} from "../utils/MathUtils";

export default function UsersPage() {
    // store
    const users = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch();

    // state
    const [name, setName] = useState<string>("");

    const addNewUser = () => {
        console.log("Add new user");

        const action = addUser({
            id: getRandomIntInclusive(1, 10000),
            name
        });
        dispatch(action);

        setName("");
    }

    return <>
        <h1>Users Page</h1>

        <div>
            {users.users.map(user => {
                return <div>
                    {user.id} - {user.name}
                </div>
            })}
        </div>

        <form onSubmit={addNewUser}>
            <label htmlFor="name">Name</label>
            <input id="name" value={name} onChange={event => setName(event.target.value)}/>
            <div>
                <button type={"submit"} onClick={addNewUser}>Submit</button>
            </div>
        </form>
    </>
}