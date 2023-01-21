import styled from 'styled-components';
import UserCard from './components/UserCard';
import { IUserInformation } from '@/interfaces/user';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserCardPage: React.FC = () => {
    const [userInformation, setUserInformation] = useState<[IUserInformation]>([{
        picture: { large: 'Loading', medium: '', thumbnail: '' },
        name: { title: '', first: '', last: '' },
        email: '',
        gender: ''
    }]);

    const request = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                setUserInformation(res.data.results)
            });
    }

    useEffect(() => {
        request()
    }, []);

    return (
        <>
            {userInformation.map(({ picture, name, email }) => (
                < UserCard key={email} picture={picture.large} name={`${name.first} ${name.last}`} email={email} />
            ))}
        </>
    )
}

export default UserCardPage;
