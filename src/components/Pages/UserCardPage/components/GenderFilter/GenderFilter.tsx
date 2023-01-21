import styled from "styled-components";
import { color } from '@/styles/variables';

const { textColor} = color;

interface GenderFilterProps {
    setSelectedFilter: (value: number) => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonGroup = styled.div`
    align: left;
    font-size: 20px;
    color: ${textColor};
`

const Label = styled.span`
    margin-left: 5px;
`

const GenderFilter: React.FC<GenderFilterProps> = props => {
    const { setSelectedFilter } = props;

    return (
        <Container>
            <ButtonGroup>
                <div>
                    <input type="radio" value="MALE" name="gender" onClick={() => setSelectedFilter(0)} />
                    <Label>Male</Label>
                </div>
                <div>
                    <input type="radio" value="FEMALE" name="gender" onClick={() => setSelectedFilter(1)} />
                    <Label>Female</Label>
                </div>
                <div>
                    <input type="radio" value="ALL" name="gender" onClick={() => setSelectedFilter(2)} />
                    <Label>ALL</Label>
                </div>
            </ButtonGroup>
        </Container>
    )
}

export default GenderFilter;

